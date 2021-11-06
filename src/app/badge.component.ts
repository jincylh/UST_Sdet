//@Component
import { Component, Input } from "@angular/core";

//class
@Component({
    selector: "badge",
    templateUrl: './badge.component.html'
})

// export
export class BadgeComponent extends Component{
    @Input('caption') caption: string ="Default"
    count : number =0;

    incrementCount(){
        console.log("click event..");
        this.count++;
    }
}


