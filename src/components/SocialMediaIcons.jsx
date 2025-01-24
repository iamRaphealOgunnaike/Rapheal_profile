const SocialMediaIcons = () => {
    return (
        <div className="flex justify-center md:justify-start my-10 gap-7">
            <a
                className="hover:opacity-50 transition duration-500"
                href="http://www.linkedin.com"
                target="_blank"
                rel="noreferred">
                <img src="../assets/linkedin.png" alt="linked-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="http://www.twitter.com"
                target="_blank"
                rel="noreferred">
                <img src="../assets/twitter.png" alt="twitter-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="http://www.facebook.com"
                target="_blank"
                rel="noreferred">
                <img src="../assets/facebook.png" alt="facebook-link" />
            </a>
            <a
                className="hover:opacity-50 transition duration-500"
                href="http://www.instagram.com"
                target="_blank"
                rel="noreferred">
                <img src="../assets/instagram.png" alt="instagram-link" />
            </a>
        </div>
    )

}

export default SocialMediaIcons