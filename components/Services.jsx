import { Contact, ShieldPlus, FileCode2, MonitorCheck } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <Contact size={72} strokeWidth={0.8} />,
        title: 'Consulting',
        description:
            'Get personalized consulting and development to turn your vision into a secure success.',
    },
    {
        icon: <ShieldPlus size={72} strokeWidth={0.8} />,
        title: 'Auditor Smart Contract',
        description:
            'Ensure the integrity and security of your blockchain code for flawless performance. Protect your project with an audit that ensures robust results!',
    },
    {
        icon: <FileCode2 size={72} strokeWidth={0.8} />,
        title: 'Smart Contract Development',
        description:
            'I offer customized development that drives efficiency and security.',
    },
    {
        icon: <MonitorCheck size={72} strokeWidth={0.8} />,
        title: 'Web Development',
        description:
            'From attractive designs to intuitive functionalities. Boost your online brand with solutions that blend creativity and efficiency to deliver unique experiences to your users.',
    }
]

const Services = () => {
    return (
        <section className="mb-12 xl:py-24">
            <div className="container mx-autor">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
                {/* grid items */}
                <div className="grid xl:grid-cols-4 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
                    {servicesData.map((item, index) => {
                        return (
                            <Card 
                                className="w-full max-w-[424px] h-[320px] flex flex-col pt-16 pb-10 justify-center items-center relative"
                                key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mb-4">{item.title}</CardTitle>
                                    <CardDescription className="text-lg">{item.description}</CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services;

