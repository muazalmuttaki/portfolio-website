 import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from "lucide-react";
import { Link } from "react-router";

const Contact = () => (
  <div className="flex items-center justify-center py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-black via-indigo-950 to-purple-900 text-white">
    <div className="w-full max-w-6xl mx-auto px-6 xl:px-0">
      <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-white text-center">
        Chat with our friendly team!
      </h2>
      <div className="mt-16 grid lg:grid-cols-2 gap-16 md:gap-10">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-blue-900/40 text-blue-400 rounded-full">
              <MailIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Email</h3>
            <p className="my-2.5 text-purple-300">Our friendly team is here to help.</p>
            <Link
              className="font-medium text-blue-300 hover:text-white"
              to="mailto:muazalmuttaki@gmail.com"
            >
              muazalmuttaki@gmail.com
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-green-900/40 text-green-300 rounded-full">
              <MessageCircle />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Live chat</h3>
            <p className="my-2.5 text-purple-300">Our friendly team is here to help.</p>
            <Link className="font-medium text-green-300 hover:text-white" to="#">
              Start new chat
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-purple-900/40 text-purple-300 rounded-full">
              <MapPinIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Office</h3>
            <p className="my-2.5 text-purple-300">Come say hello at our office HQ.</p>
            <Link
              className="font-medium text-purple-300 hover:text-white"
              to="https://map.google.com"
              target="_blank"
            >
              100 Smith Street Collingwood <br /> VIC 3066 AU
            </Link>
          </div>

          <div>
            <div className="h-12 w-12 flex items-center justify-center bg-yellow-900/40 text-yellow-300 rounded-full">
              <PhoneIcon />
            </div>
            <h3 className="mt-6 font-semibold text-xl text-white">Phone</h3>
            <p className="my-2.5 text-purple-300">Mon-Fri from 8am to 5pm.</p>
            <Link
              className="font-medium text-yellow-300 hover:text-white"
              to="tel:+8801568382968"
            >
              +88 01568 382968
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <Card className="bg-black/50 shadow-xl rounded-xl backdrop-blur-md border border-white/10">
          <CardContent className="p-6 md:p-8">
            <form>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="firstName" className="text-white">First Name</Label>
                  <Input
                    placeholder="First name"
                    id="firstName"
                    className="mt-2 h-10 border border-gray-600 focus:border-indigo-400 shadow-sm bg-white/80 text-black"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Label htmlFor="lastName" className="text-white">Last Name</Label>
                  <Input
                    placeholder="Last name"
                    id="lastName"
                    className="mt-2 h-10 border border-gray-600 focus:border-indigo-400 shadow-sm bg-white/80 text-black"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="email" className="text-white">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    className="mt-2 h-10 border border-gray-600 focus:border-indigo-400 shadow-sm bg-white/80 text-black"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="message" className="text-white">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Message"
                    className="mt-2 border border-gray-600 focus:border-indigo-400 shadow-sm bg-white/80 text-black"
                    rows={6}
                  />
                </div>
                <div className="col-span-2 flex items-center gap-2">
                  <Checkbox id="acceptTerms" className="bg-gray-200" />
                  <Label htmlFor="acceptTerms" className="gap-0 text-white">
                    You agree to our
                    <Link
                      to="#"
                      className="underline ml-1 text-indigo-300 hover:text-indigo-500"
                    >
                      terms and conditions
                    </Link>
                    <span>.</span>
                  </Label>
                </div>
              </div>
              <Button
                className="mt-6 w-full bg-indigo-700 hover:bg-indigo-800 text-white"
                size="lg"
              >
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
);

export default Contact;
