import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./nav-menu/nav-menu.component";
import { HomeComponent } from "./home/home.component";
import { CounterComponent } from "./counter/counter.component";
import { FetchDataComponent } from "./fetch-data/fetch-data.component";
import { ChatService } from "./services/chat-service";
import { ApiAuthorizationModule } from "src/api-authorization/api-authorization.module";
import { AuthorizeGuard } from "src/api-authorization/authorize.guard";
import { AuthorizeInterceptor } from "src/api-authorization/authorize.interceptor";
import { ControlRoomComponent } from "./components/control-room/control-room.component";
import { ScoreBoardComponent } from "./components/score-board/score-board.component";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ControlRoomComponent,
    ScoreBoardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "control", component: ControlRoomComponent },
      { path: "score-board", component: ScoreBoardComponent },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    ChatService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
