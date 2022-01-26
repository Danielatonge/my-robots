const robots = [
  {
    id: 1,
    name: "Daniel Atonge",
    username: "danielatonge",
    email: "d.atonge@gmail.com"
  },
  {
    id: 2,
    name: "Elambo Atonge",
    username: "danielatonge",
    email: "d.atonge@gmail.com"
  },
  {
    id: 3,
    name: "Ruth Atonge",
    username: "danielatonge",
    email: "d.atonge@gmail.com"
  },
  {
    id: 4,
    name: "Esther Atonge",
    username: "danielatonge",
    email: "d.atonge@gmail.com"
  }
];

export interface RobotType {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default robots;
