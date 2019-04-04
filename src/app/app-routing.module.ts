import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "first", loadChildren: "./first/first.module#FirstPageModule" },
  {
    path: "student-feedback",
    loadChildren:
      "./student-feedback/student-feedback.module#StudentFeedbackPageModule"
  },
  {
    path: "lec-list",
    loadChildren: "./lec-list/lec-list.module#LecListPageModule"
  },
  { path: "about", loadChildren: "./about/about.module#AboutPageModule" },
  {
    path: "complaint",
    loadChildren: "./complaint/complaint.module#ComplaintPageModule"
  },
  {
    path: "contact",
    loadChildren: "./contact/contact.module#ContactPageModule"
  },
  { path: "login", loadChildren: "./login/login.module#LoginPageModule" },
  {
    path: "meeting",
    loadChildren: "./meeting/meeting.module#MeetingPageModule"
  },
  {
    path: "meetingadd",
    loadChildren: "./meetingadd/meetingadd.module#MeetingaddPageModule"
  },
  { path: "myhome", loadChildren: "./myhome/myhome.module#MyhomePageModule" },
  {
    path: "noticeadd",
    loadChildren: "./noticeadd/noticeadd.module#NoticeaddPageModule"
  },
  {
    path: "payment",
    loadChildren: "./payment/payment.module#PaymentPageModule"
  },
  {
    path: "services",
    loadChildren: "./services/services.module#ServicesPageModule"
  },
  { path: "signup", loadChildren: "./signup/signup.module#SignupPageModule" },
  {
    path: "soccontact",
    loadChildren: "./soccontact/soccontact.module#SoccontactPageModule"
  },
  { path: "tabs", loadChildren: "./tabs/tabs.module#TabsPageModule" },
  { path: "test1", loadChildren: "./test1/test1.module#Test1PageModule" },
  { path: "notice", loadChildren: "./notice/notice.module#NoticePageModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
