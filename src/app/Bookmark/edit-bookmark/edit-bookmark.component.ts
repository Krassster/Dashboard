import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Bookmark } from '../../shared/bookmarks.model';
import { BookmarkService } from '../../shared/bookmark.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent implements OnInit {
  bookmark!: Bookmark;

  constructor(
    private bookmarkService: BookmarkService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');

      if (idParam !== null) {
        const fetchedBookmark = this.bookmarkService.getBookmark(idParam);
        if (fetchedBookmark !== undefined) {
          this.bookmark = fetchedBookmark;
        } else {
        }
      }
    });
  }

  onFormSubmit(form: NgForm) {
    const { name, url } = form.value;
    this.bookmarkService.updateBookmark(this.bookmark.id, {
      name,
      url: new URL(url),
    });
  }

  delete() {
    this.bookmarkService.deleteBookmark(this.bookmark.id);
    this.router.navigateByUrl('/bookmarks');
  }
}
