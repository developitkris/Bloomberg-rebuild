import {Pipe, PipeTransform} from '@angular/core';
import {Article} from './models/article.model';

@Pipe({
  name: "selected",
  pure: true
})

//if impure, change view to input[i]
export class SelectedPipe implements PipeTransform {
  transform(input: Article[], desiredView){
    let output: Article[]=[];
    if(desiredView ==="topArticles"){
      for(let i=0; i<input.length; i++){
        if(input[i].pure===false){
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredView ==="recentArticles"){
      for(let i=0; i<input.length; i++){
        if(input[i].pure ===false){
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
