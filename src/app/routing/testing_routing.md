# Testing routing

When your component does any routing you should always add the `RouterTestingModule` to your test imports. This will make sure that you aren't actually routing in your tests.

You then have a few options when you test your routing. You can test the url path by using `Location` from `@angular/common` or you can spy on the router to check that the navigation method has been called.

See the [Route1Component spec](route1/route1.component.spec.ts) for some example of this and see the [Route1Component](route1/route1.component.ts) for the different ways of routing.