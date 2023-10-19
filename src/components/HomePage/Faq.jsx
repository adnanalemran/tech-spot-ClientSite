import React from "react";

const Faq = () => {
  return (
    <div>
      <section className="  ">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8  ">
            Welcome to our FAQ section where we answer common questions about
            our technology products and services.
          </p>
          <div className="space-y-4">
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                What is the return policy for your technology products?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  ">
                Our return policy allows you to return technology products
                within 30 days of purchase. Please refer to our detailed return
                policy for more information.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                How can I track my order?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  ">
                You can easily track your order by logging into your account and
                visiting the order tracking section. We provide real-time
                updates on the status of your order.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                Do you offer warranty on your technology products?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  ">
                Yes, we offer warranties on many of our technology products. The
                length and terms of the warranty may vary, so please check the
                product description for specific warranty information.
              </p>
            </details>
            <details className="w-full border rounded-lg">
              <summary className="px-4 py-6 focus:outline-none focus-visible:ring">
                What payment methods do you accept?
              </summary>
              <p className="px-4 py-6 pt-0 ml-4 -mt-4  ">
                We accept a variety of payment methods, including credit cards,
                debit cards, and PayPal. You can select your preferred payment
                method during the checkout process.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
