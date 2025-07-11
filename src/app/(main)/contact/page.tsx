import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            Feel free to reach out!
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-2xl font-semibold">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>+1 (123) 456-7890</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p>San Francisco, CA (Working Remotely)</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground">
                I am currently available for freelance work. My typical response time is within 24 hours.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-card border rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Send Me a Message</h2>
              {/* <ContactForm /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}