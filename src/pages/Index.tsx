import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Leaf, TreePine, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';

const Index = () => {
  const featuredServices = services.slice(0, 3);
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-green-600 to-green-700 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://picsum.photos/1920/600?random=hero"
            alt="Beautiful garden landscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform Your Outdoor Space
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-50">
              Professional gardening and landscaping services across the UK. Creating beautiful, sustainable gardens that enhance your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
                <Link to="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600" asChild>
                <Link to="/services">
                  View Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Users className="w-12 h-12 text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <TreePine className="w-12 h-12 text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="flex flex-col items-center">
              <Leaf className="w-12 h-12 text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900">1000+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-12 h-12 text-green-600 mb-3" />
              <div className="text-2xl font-bold text-gray-900">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From routine maintenance to complete garden transformations, we offer comprehensive landscaping solutions tailored to your needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <Card key={service.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-green-600 font-semibold mb-4">{service.price}</div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/services">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Green Scape?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Expert Team</h3>
                <p className="text-gray-600">Fully qualified and experienced landscapers dedicated to quality workmanship.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Eco-friendly solutions that promote biodiversity and environmental responsibility.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Guaranteed Quality</h3>
                <p className="text-gray-600">All our work comes with a satisfaction guarantee and comprehensive warranties.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Free Consultations</h3>
                <p className="text-gray-600">No-obligation site visits and detailed quotes tailored to your budget.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
                <p className="text-gray-600">Comprehensive insurance coverage for complete peace of mind.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Local Knowledge</h3>
                <p className="text-gray-600">Deep understanding of UK climate conditions and native plant species.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers across the UK.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredTestimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" variant="outline" asChild>
              <Link to="/testimonials">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Garden?
          </h2>
          <p className="text-xl text-green-50 mb-8 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation consultation and let's create the outdoor space of your dreams.
          </p>
          <Button size="lg" className="bg-white text-green-600 hover:bg-green-50" asChild>
            <Link to="/contact">
              Get Your Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;