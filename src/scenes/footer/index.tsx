import Logo from "@/assets/Logo.png"


const Footer = () => {
  return <footer className=" bg-primary-100 py-16">
    <div className=" justify-content mx-auto w-5/6 gap-16 md:flex">
      <div className=" mt-16 basis-1/2 md:mt-0">
        <img alt="logo" src={Logo}/>
        <p className="my-5">
        "Welcome to Evogym, where fitness meets evolution! Joining Evogym isn't just a commitment to a workout routine; it's an investment in your well-being. Our cutting-edge facilities, dedicated trainers, and a wide array of fitness programs cater to individuals at every fitness level.<span className=" font-bold">Join Evogym today and embrace the evolution of your fitness journey!"</span>
        </p>
        <p>© Evogym All rights Reserved</p>
      </div>
      <div className=" mt-16 basis-1/4 md:mt-0">
         
      </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5"> </p>
          <p>(+91) 918363901</p>
        </div>
    </div>
  </footer>
}

export default Footer;