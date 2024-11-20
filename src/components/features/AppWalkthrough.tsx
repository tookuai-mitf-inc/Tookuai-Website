import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AppWalkthrough = () => {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardContent className="p-6">
        <Tabs defaultValue="booking" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="booking">Booking</TabsTrigger>
            <TabsTrigger value="tracking">Tracking</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
          </TabsList>
          <TabsContent value="booking">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Booking Interface Demo</p>
              </div>
            </AspectRatio>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Simple Booking Process</h3>
              <p className="text-muted-foreground">Select your pickup location, choose your preferred vehicle, and confirm your booking in just a few taps.</p>
            </div>
          </TabsContent>
          <TabsContent value="tracking">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Real-time Tracking Demo</p>
              </div>
            </AspectRatio>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Live Vehicle Tracking</h3>
              <p className="text-muted-foreground">Monitor your driver's location in real-time and get accurate ETAs for your journey.</p>
            </div>
          </TabsContent>
          <TabsContent value="payment">
            <AspectRatio ratio={16 / 9}>
              <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                <p className="text-lg text-muted-foreground">Payment System Demo</p>
              </div>
            </AspectRatio>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Seamless Payments</h3>
              <p className="text-muted-foreground">Multiple payment options available with secure transaction processing and digital receipts.</p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AppWalkthrough;