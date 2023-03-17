const Footer = () => {
  return (
    <div className="bg-black text-neutral-300 mt-16 py-10">
      <h3 className="text-center">This will be our Footer</h3>
      <div className="flex justify-between mx-20">
        <div>
          <h2>
            <u>Company</u>
          </h2>
          <h3 className="mt-5">Team</h3>
          <h3>Careers</h3>
          <h3>Blog</h3>
          <h3>Bug Bounty</h3>
        </div>
        <div>
          <h2>
            <u>Legal</u>
          </h2>
          <h3 className="mt-5">Terms & Conditions</h3>
          <h3>Refund Policy</h3>
          <h3>Cancellation criterion</h3>
          <h3>Offer Terms</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
