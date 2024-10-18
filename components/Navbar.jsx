import { Input } from "./ui/input";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <div className="w-full max-w-[300px]">
        <Input placeholder="search here"/>
      </div>
      <div>
        <div className="overflow-hidden w-[50px] aspect-square rounded-full border-2 border-white">
          <img src="https://www.shutterstock.com/image-photo/profile-picture-student-girl-25-260nw-2422952523.jpg" className="object-cover w-full h-full"/>
        </div>
      </div>
    </nav>
  )
}