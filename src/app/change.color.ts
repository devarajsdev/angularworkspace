    import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector:'[app-color-change]'
})

export class ColorChange{

    constructor(private el : ElementRef){
        console.log('invoked color change ');
        console.log("reference of element :"+el.nativeElement.style);
    }

    @HostListener('mouseenter')
    public changeColor(){
        console.log("invoked change color on mouse enter");
        this.el.nativeElement.style.backgroundColor="Blue";
    }

    @HostListener('mouseleave')
    public onLeave(){
        console.log("invoked change color on mouse enter");
        this.el.nativeElement.style.backgroundColor="Green";
    }

}