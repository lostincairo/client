import Image from 'next/image';

const actions = [
  { name: "Bow", description: "Launches an arrow towards the opponent", href:"/logo_Main.png" },
  { name: "Punch", description: "Trows a powerful punch towards the opponent", href:"/brick.png" },
];

export default function Actions() {
  return actions.map((action) => (
    <div>
    <div>{action.name}</div>
    <Image src={action.href} width="36" height="36"/>
    </div>
  ))
}
