// import SocialMediaIcons from "../components/SocialMediaIcons"


// const Footer = () => {

//     return (
//         <footer className="h-64 bg-red">
//             <div className="w-5/6 mx-auto">
//                 <SocialMediaIcons />
//                 <div className="md:flex justify-center md:justify-between text-center">
//                 <p className="font-playfair font-semibold text-2xl text-yellow">WEMIMO OGUNNS</p>
//                 <p className="font-playfair text-md text-yellow ">©2024 WEMIMO . All Rights Reserved. </p>
//             </div>
//             </div >
           
//         </footer>
//     )

// }

// export default Footer

import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="h-64 bg-red">
            <div className="w-5/6 mx-auto py-10">
                {/* Social Media Icons */}
                <SocialMediaIcons />

                {/* Footer Text */}
                <div className="flex flex-col md:flex-row justify-center md:justify-between text-center mt-5">
                    <p className="font-playfair font-semibold text-2xl text-yellow">
                        WEMIMO OGUNS
                    </p>
                    <small>
                        <p className="font-playfair text-md text-yellow">
                            ©{currentYear} WEMIMO. All Rights Reserved.
                        </p>
                    </small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
