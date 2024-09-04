import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-overview-publications',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './overview-publications.component.html',
  styleUrl: './overview-publications.component.scss'
})
export class OverviewPublicationsComponent {
  // TODO: Move Data to another file (this is test data)
  postsData = [
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test adasda jslh galkidfjas',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Po',
      descriptionOverview: 'Description test for the post in Overview page'
    },
    {
      id: 'post-1',
      date: '24-03-1994',
      title: 'Post Title Test',
      descriptionOverview: 'Description test for the post in Overview page'
    }
  ];
}
