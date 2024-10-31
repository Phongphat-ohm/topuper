declare module 'captcha-generator' {
    export class CaptchaGenerator {
        options: {
            width: number;
            height: number;
            fontSize: number;
            background: string;
        };
        generate(): {
            text: string;
            getWidth(): number;
            getHeight(): number;
        };
    }
}
