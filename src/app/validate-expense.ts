import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appValidateExpense]'
})
export class ValidateExpense {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event'])
  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = parseFloat(input.value);
    
    // Remove all validation classes
    this.renderer.removeClass(this.el.nativeElement, 'validation-invalid');
    this.renderer.removeClass(this.el.nativeElement, 'validation-valid');
    
    if (input.value === '') {
      // Empty input - no styling
      return;
    }
    
    if (isNaN(value) || value < 0) {
      // Invalid: negative or not a number
      this.renderer.addClass(this.el.nativeElement, 'validation-invalid');
    } else {
      // Valid: positive number
      this.renderer.addClass(this.el.nativeElement, 'validation-valid');
    }
  }
  
  @HostListener('blur')
  onBlur(): void {
    // Remove validation classes on blur
    this.renderer.removeClass(this.el.nativeElement, 'validation-invalid');
    this.renderer.removeClass(this.el.nativeElement, 'validation-valid');
  }
}
