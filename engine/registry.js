// Entity Component System Registry

import { v4 as uuidv4 } from "uuid";

export class Component {
  constructor(type) {
    this.type = type;
  }
}

export class System {
  constructor(awake, start, update, destroy) {
    this.type = type;
    this.awake = awake;
    this.start = start;
    this.destroy = destroy;
  }
}

export class Registry {
  constructor(
    entities,
    entitiesToComponents,
    componentTypesToEntities,
    systems,
    queuedForStart
  ) {
    this.entities = entities;
    this.entitiesToComponents = entitiesToComponents;
    this.componentTypesToEntities = componentTypesToEntities;
    this.systems = systems;
    this.queuedForStart = queuedForStart;
  }
  // create a new entity and push it to the list of entities
  createEntity(id) {
    const entity = id ? id : uuidv4();
    this.entities.push(entity);
    this.entitiesToComponents.set(entity, []); // Initialize empty array of components

    return entity;
  }

  // get an entity by its id
  getEntity(id) {
    return this.entities.find((e) => e.id === id);
  }

  // remove an entity from the scene
  destroyEntity(id) {
    // filter the entities list to only get the current id
    this.entities = this.entities.filter((e) => e != id);

    // Remove entity from lookup tables so components don't still hang around
    // First get all components and remove this from their indexes (otherwise we would lose this list)

    if (this.entitiesToComponents.get(id)) {
      for (let i = 0; i < this.entitiesToComponents.get(id).length; i++) {
        const componentType = this.entitiesToComponents.get(id)[i].type;

        // remove this id from the list
        this.componentTypesToEntities.set(
          componentType,
          this.entitiesToComponents.get(componentType).filter((e) => e != id)
        );
      }
    }
    this.entitiesToComponents.delete(id);
  }

  // add a component to a specific entity
  addComponent(entity, component) {
    // check if a component of the same type does not already exist for this entity
    if (
      !this.entitiesToComponents
        .get(entity)
        .find((existing) => existing.type == component.type)
    ) {
      // add the component
      this.entitiesToComponents.get(entity).push(component);

      // keep track of which entities have this component for future lookups
      this.componentTypesToEntities.get(component.type)
        ? // we have already registered this component, add the entity to the list
          this.componentTypesToEntities.get(component.type).push(entity)
        : // we haven't registered this component yet, register then add our entity
          this.componentTypesToEntities.set(component.type, [entity]);
    } else {
      throw `There is already a component of type "${component.type} on ${entity}`;
    }
  }

  // remove a component from a specific entity
  removeComponent(entity, component) {
    if (this.entitiesToComponents.get(entity)) {
      this.entitiesToComponents.set(
        entity,
        this.entitiesToComponents
          .get(entity)
          .filter((existing) => existing.type != component.type)
      );
      // remove the entity from the component's list of entities
      this.componentTypesToEntities.set(
        component.type,
        this.componentTypesToEntities
          .get(component.type)
          .filter((existing) => existing != entity)
      );
    } else {
      throw `Entity ${entity} does not exist`;
    }
  }

  getComponent(entity, type) {
    if (this.entitiesToComponents.get(entity)) {
      return this.entitiesToComponents
        .get(entity)
        .find((component) => component.type === type);
    }
  }

  getComponentByEntity(entity) {
    return this.entitiesToComponents.get(entity);
  }

  getComponentByComponentType(type) {
    return this.componentTypesToEntities.get(type);
  }

  addSystem(system) {
    this.systems.push(system);

    // run an awake function if the system is just starting
    if (system.awake) {
      system.awake();
    }

    // Queue the start() command which will run on the next update() frame
    if (system.start) {
      this.queuedForStart.push(system);
    }
  }
  // called every frame when system is 'active'
  update = () => {
    // first process any systems that need to 'start'
    while (this.queuedForStart.length > 0) {
      // iterate through the queue and start any systems
      this.queuedForStart.shift().start();
    }

    // run through our update loop
    for (let i = 0; i < this.systems.length; i++) {
      if (this.systems[i].update) {
        this.systems[i].update();
      }
    }
  };

  // Clean up all systems
  destroySystem = () => {
    // shift (first to last) each system off the queue and delete them
    while (this.systems.length > 0) {
      const system = this.systems.shift();
      if (system.destroy) {
        system.destroy();
      }
    }
  };

  getDebugState = () => {
    return { entites: this.entities, entitiesToComponents: this.entitiesToComponents, componentTypesToEntities: this.componentTypesToEntities }
}

}