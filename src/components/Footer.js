

//footer components

import Section from "./Section";

function Footer() {
    return (
        <div className="bg-gray-500 text-white text-sm md:text-lg">
            <div className="mx-20">
                <p className="pt-10">◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold.</p>

                <p className="mt-10">
                    No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms apply. Representative example: A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.</p>

                <p className="mt-10">‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card.</p>

                <p className="mt-10 mb-10">Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.</p>

            </div>

            <hr className="mx-auto w-4/5 bg-gray-500 h-[2px] md:ml-24 md:mx-0" />

            <div className="flex justify-around mt-10 mb-10">
                <div>
                    <p className="font-bold text-xl">Shop & Learn</p>
                    <p className="font-light">Store</p>
                    <p className="font-light">Mac</p>
                    <p className="font-light">iPad</p>
                    <p className="font-light">iPhone</p>
                    <p className="font-light">Watch</p>
                    <p className="font-light">AirPods</p>
                </div>

                <div>
                    <p className="font-bold text-xl">Account</p>
                    <p className="font-light">Manage Your Account</p>
                    <p className="font-light">Sign In</p>
                    <p className="font-light">Create Account</p>
                    <p className="font-light">Order History</p>
                    <p className="font-light">Billing Information</p>
                    <p className="font-light">Payment Methods</p>
                </div>

                <div>
                    <p className="font-bold text-xl">Apple Store</p>
                    <p className="font-light">Mac</p>
                    <p className="font-light">iPad</p>
                    <p className="font-light">iPhone</p>
                    <p className="font-light">Watch</p>
                    <p className="font-light">AirPods</p>
                    <p className="font-light">Apple Watch</p>
                </div>
            </div>
       
            <hr className="mx-auto w-4/5 bg-gray-500 h-[2px] md:ml-24 md:mx-0" />

            <div className="p-5 text-center">
                <p>Copyrights &copy; 2025 Apple Inc. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer