import watermark from './waterMark';

export default function installDirective(app) {
    app.directive(watermark.name, watermark.directives);
    //...
   
} 

