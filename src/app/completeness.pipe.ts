import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

@Pipe({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform {
  transform(input: Article[]){
    let output: Article[]=[];
    for(let i=0;i<input.length;i++){
      if(input[i].done===false){
        output.push(input[i]);
      }
    }
    return output;
  }
}
