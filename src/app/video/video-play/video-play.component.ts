import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-video-play',
  templateUrl: './video-play.component.html',
  styleUrls: ['./video-play.component.css']
})
export class VideoPlayComponent implements OnInit {
  @ViewChild('videoPlayer') videoplayer: any;

toggleVideo(event: any) {
    this.videoplayer.nativeElement.play();
}

  constructor() { }

  ngOnInit() {
  }

}
