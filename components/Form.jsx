'use client';

import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare} from 'lucide-react';
import { sendEmail } from '../actions/sendEmails';

const Form = () => {
    return (
        <form className='flex flex-col gap-y-4'
        action={async (formData) => {
            await sendEmail(formData);
        }}>
            { /* input */ }
            <div className='relative flex items-center'>
                <Input type='name' id='name' placeholder='Name' required/>
                <User className='absolute right-6' size={20} />
            </div>
            { /* input */ }
            <div className='relative flex items-center'>
                <Input type='email' id='email' placeholder='Email' name="email" required />
                <MailIcon className='absolute right-6' size={20} />
            </div>
            { /* textarea */ }
            <div className='relative flex items-center'>
                <Textarea style={{ resize: 'none' }} name="message" placeholder='Type Your Message Here.' required />
                <MessageSquare className='absolute top-4 right-6' size={20} />
            </div>
            <Button className='flex items-center gap-x-1 max-w-[166px]'>
                Let's Talk
                <ArrowRightIcon size={20} />
                </Button>
        </form>
    )
}

export default Form