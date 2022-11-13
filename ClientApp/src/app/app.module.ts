import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { NavMenuComponent } from "@components/nav-menu/nav-menu.component";
import { HomeComponent } from "@components/home/home.component";
import { CounterComponent } from "@components/counter/counter.component";
import { FetchDataComponent } from "@components/fetch-data/fetch-data.component";
import { ChatService } from "@services/chat-service";
import { ApiAuthorizationModule } from "src/api-authorization/api-authorization.module";
import { AuthorizeGuard } from "src/api-authorization/authorize.guard";
import { AuthorizeInterceptor } from "src/api-authorization/authorize.interceptor";
import { ControlRoomComponent } from "@components/control-room/control-room.component";
import { ScoreBoardComponent } from "@components/score-board/score-board.component";
import { ChatComponent } from '@components/chat/chat.component';
import { AboutComponent } from '@components/about/about.component';
import { ProductsComponent } from '@components/products/products.component';
import { StoreComponent } from '@components/store/store.component';
import { ScoreboardService } from "@services/scoreboard.service";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    ControlRoomComponent,
    ScoreBoardComponent,
    ChatComponent,
    AboutComponent,
    ProductsComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ApiAuthorizationModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      { path: "home", component: HomeComponent },
      { path: "about", component: AboutComponent },
      { path: "products", component: ProductsComponent },
      { path: "store", component: StoreComponent },
      { path: "control", component: ControlRoomComponent },
      { path: "score-board", component: ScoreBoardComponent },
      { path: "counter", component: CounterComponent },
      { path: "fetch-data", component: FetchDataComponent, canActivate: [AuthorizeGuard] },
    ])
  ],
  providers: [
    ChatService,
    ScoreboardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthorizeInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
