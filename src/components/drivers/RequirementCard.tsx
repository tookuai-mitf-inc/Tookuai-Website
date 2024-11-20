import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

interface RequirementCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const RequirementCard = ({ title, description, icon: Icon }: RequirementCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <Icon className="w-12 h-12 mb-4 text-primary" />
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default RequirementCard;