import { Component } from "@angular/core";

@Component({
  selector: 'app-templates-test',
  templateUrl: './templates-test.component.html'
})
export class TemplatesTestComponent {
  public isLoading = true;

  public onChangeClicked() {
    this.isLoading = !this.isLoading;
  }
}
