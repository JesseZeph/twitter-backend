import {SESClient, SendEmailCommand} from '@aws-sdk/client-ses';
import { error } from "console";
require("dotenv").config();

const ses = new SESClient({
    region: 'us-west-1',
})



function createSendEmailCommand(toAddress: string, fromAddress: string, message: string) {
    return new SendEmailCommand({
        Destination: {
            ToAddresses: [toAddress],
        },
        Source: fromAddress,
        Message: {
            Subject: {
                Charset: "UTF-8",
                Data: "Your one-time password"
            },
            Body: {
                Text: {
                    Charset: "UTF-8",
                    Data: message
                },
            }
        },
    })
}

export async function sendEmailToken(email: string, token: string){

      const message = `Your one-time password: ${token}`
      const command = createSendEmailCommand(
        email,
        'bobcatzephyr@gmail.com',
        message
      );

      try {
        return await ses.send(command);
      } catch (e) {
        console.log('Error sending email', e)
        return error;
        
      }

}

sendEmailToken('yishaiyoshiyahu@gmail.com', '345678')