import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  content?: string;
  posts: any;

  // Array of fallback images (replace with URLs of your choice)
  backgroundImages: string[] = [
    'https://images.unsplash.com/photo-1557682269-e239b7e9f545?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjAwNDkzMjQ4&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjAwNDkzMjQ4&ixlib=rb-1.2.1&q=80&w=1080',
    'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDd8fHRlY2hub2xvZ3l8ZW58MHx8fHwxNjAwNDkzMjQ4&ixlib=rb-1.2.1&q=80&w=1080',
  ];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Fetch posts from the UserService
    this.userService.getData().subscribe((data) => {
      this.posts = data;
    });

    // Set a random background image
    this.setRandomBackground();
  }

  // Method to set a random background image from the array
  setRandomBackground(): void {
    const headerBackground = document.querySelector(
      '.header-background'
    ) as HTMLElement;
    const randomImage =
      this.backgroundImages[
        Math.floor(Math.random() * this.backgroundImages.length)
      ];

    if (headerBackground) {
      headerBackground.style.backgroundImage = `url(${randomImage})`;
    }
  }
}
