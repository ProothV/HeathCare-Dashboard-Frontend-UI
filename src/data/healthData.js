import lungsImg from "../assets/lungs.png"
import teethImg from "../assets/teeth.png"
import bonesImg from "../assets/bones.png"
// import heartImg from "../assets/heart.png"
// import legsImg from "../assets/legs.png"

export const healthData = [
  { name: "Lungs", status: "Checkup Needed", icon: "lungs", image: lungsImg , date: "26 Oct 2021", color: "#FF6B6B", progress: 30, progressColor: "#FF6B6B" },
  { name: "Heart", status: "Healthy", icon: "heart", image: "../assets/heart.png", date: "26 Oct 2021", color: "#1E90FF" }, // Blue background
  { name: "Teeth", status: "Checkup Needed", icon: "teeth", image: teethImg, date: "26 Oct 2021", color: "#FF6B6B", progress: 50, progressColor: "#FF6B6B" },
  { name: "Bone", status: "Healthy", icon: "bone", image: bonesImg, date: "26 Oct 2021", color: "#D4EDDA", progress: 80, progressColor: "#4CAF50" },
  { name: "Leg", status: "Healthy", icon: "leg", image: "../assets/leg.png", date: "26 Oct 2021", color: "#87CEEB" }, // Sky blue background
];