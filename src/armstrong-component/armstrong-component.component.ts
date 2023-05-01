import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-armstrong-component',
  templateUrl: './armstrong-component.component.html',
  styleUrls: ['./armstrong-component.component.css']
})
export class ArmstrongComponentComponentn 
{
  
   
   @Output()  armstrongfunction : EventEmitter<any> = new  EventEmitter();

ArmstrongOfNumber()
{
   
   let numberOne:number=153;
   let temp:number=numberOne;
   let sum:number=0;
   let result:string|undefined;
   while(numberOne>=0)
   {
      let remainder = numberOne%10;
      sum = sum + remainder* remainder * remainder;
      numberOne=numberOne/10;
   }

   if(sum==temp)
   {
       this.armstrongfunction.emit("armstrong");
       
   }
   else
   {
      
     this.armstrongfunction.emit("Not armstrong");
    
   }
   
}


}
