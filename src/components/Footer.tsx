import { Wrapper } from "../imports"
const Footer = () => {
    return (
        <footer className="bg-[#111827] py-[64px]">
            <Wrapper className="">
                <nav className="flex text-white items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl uppercase font-bold text-white">core<span className="text-[#197FE6] text-3xl">.</span></h2>
                        <p className="md:w-[268px] text-[#9CA3AF] text-[14px]">Premium essentials for the modern
                            lifestyle. Minimalist design, maximal
                            quality.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[14px] text-white font-bold">SUPPORT</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Contact Us</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Shipping & Returns</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">FAQ</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Order Tracking</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[14px] text-white font-bold">COMPANY</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Our Story</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Sustainability</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Careers</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Press</a></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[14px] text-white font-bold">LEGAL</h2>
                        <ul className="flex flex-col gap-4">
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Privacy Policy</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Terms of Service</a></li>
                            <li className="text-[14px] text-[#9CA3AF]"><a href="#">Cookie Policy</a></li>
                        </ul>
                    </div>
                </nav>
                <hr className="mt-[48px] text-[#6B7280]" />
                <div className="flex justify-between mt-[48px]">
                    <p className="text-[#6B7280]">© 2026 CORE. All rights reserved.</p>
                    <ul className="flex gap-3">
                        <li className="text-[#6B7280]"><a href="#"><a href="#">Instagram</a></a></li>
                        <li className="text-[#6B7280]"><a href="#"><a href="#">Twiter</a></a></li>
                        <li className="text-[#6B7280]"><a href="#"><a href="#">Pinterest</a></a></li>
                    </ul>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer