import { Home, MessageCircle, Settings, Users } from "lucide-react"; // Replace with your preferred icons
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import Logo from "@/public/Logo.png"
import Image from "next/image";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" side="left" >
      <SidebarHeader className="h-20 flex items-center justify-center bg-[#115E56] ">
        <div className="text-2xl font-bold"><Image src={Logo} alt="Logo"/> </div>
      </SidebarHeader>
      <div className="flex justify-center items-center">

        </div>

      <SidebarContent className="bg-[#115E56] text-white">
      <hr className="w-8 mx-auto border-black" />
        <SidebarGroup>
          <SidebarMenu>
            {/* Home Button */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Home />
                  <span>Home</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Chat Button */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <MessageCircle />
                  <span>Chat</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>

            {/* Settings Button */}
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <a href="#">
                  <Users />
                  <span>Settings</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="bg-[#115E56]">
        {/* Footer Placeholder */}
        <div className="text-sm text-white text-center">
          <button>
          <Settings/> </button></div>
      </SidebarFooter>
    </Sidebar>
  );
}

