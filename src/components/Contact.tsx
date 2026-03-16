import { Button, Wrapper } from "../imports"
const Contact = () => {
    return (
        <div className="bg-white">
            <Wrapper className="flex flex-col justify-center items-center py-[80px] gap-4 px-6 md:px-0 text-center">
                <h2 className="text-[28px] md:text-[30px] font-bold text-[#111827]">Stay in the Loop</h2>
                <p className="text-[#6B7280] text-[16px] max-w-[520px]">
                    Sign up for our newsletter to receive exclusive offers and first access to new drops.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <input
                        type="text"
                        placeholder="Your email address"
                        className="h-[48px] border border-[#E5E7EB] rounded-lg w-full sm:w-[320px] px-3 focus:outline-none focus:border-[#197FE6]"
                    />
                    <Button className="text-white bg-[#197FE6] h-[48px] px-6 rounded-lg w-full sm:w-auto" onClick={() => {}}>
                        Subscribe
                    </Button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Contact
