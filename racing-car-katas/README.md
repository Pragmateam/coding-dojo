# Racing Car Katas

In this repository you'll find starting code for four distinct problems. They could be code you inherited from a legacy code-base. Now you want to write unit tests for them, and that is harder than it needs to be. All of the code snippets fail to follow one or more of the SOLID principles.

For each exercise, you should identify which SOLID principles are not being followed by the code. There is only one class you are interested in writing tests for right now. As a first step, try to get some kind of test in place before you change the class at all. If the tests are hard to write, is that because of the problems with SOLID principles?

When you have some kind of test to lean on, refactor the code and make it testable. Take care when refactoring not to alter the functionality, or change interfaces which other client code may rely on. (Imagine there is client code in another repository that you can't see right now). Add more tests to cover the functionality of the particular class you've been asked to get under test.

Apply the unit testing style and framework you are most comfortable with. You can choose to use stubs or mocks or none at all. If you do, you are free to use the mocking tool that you prefer.

1. **TirePressureMonitoringSystem exercise**:  write the unit tests for the Alarm class. The Alarm class is designed to monitor tire pressure and set an alarm if the pressure falls outside of the expected range. The Sensor class provided for the exercise fakes the behaviour of a real tire sensor, providing random but realistic values.

2. **UnicodeFileToHtmlTextConverter exercise**: write the unit tests for the UnicodeFileToHtmlTextConverter class. The UnicodeFileToHtmlTextConverter class is designed to reformat a plain text file for display in a browser. For the Python and Java versions, there is an additional class "HtmlPagesConverter" which is slightly harder to get under test. It not only converts text in a file to html, it also supports pagination. It's meant as a follow up exercise.

3. **TicketDispenser exercise**: write the unit tests for the TicketDispenser. The TicketDispenser class is designed to be used to manage a queuing system in a shop. There may be more than one ticket dispenser but the same ticket should not be issued to two different customers.

4. **TelemetrySystem exercise**: write the unit tests for the TelemetryDiagnosticControls class. The responsibility of the TelemetryDiagnosticControls class is to establish a connection to the telemetry server (through the TelemetryClient), send a diagnostic request and successfully receive the response that contains the diagnostic info. The TelemetryClient class provided for the exercise fakes the behavior of the real TelemetryClient class, and can respond with either the diagnostic information or a random sequence. The real TelemetryClient class would connect and communicate with the telemetry server via tcp/ip.

5. **Leaderboard exercise**: (note this exercise is still being developed) Write the unit tests for the Leaderboard class, including races with self driving cars. The Leaderboard calculates driver points and rankings based on results from a number of races.

From: https://github.com/emilybache/Racing-Car-Katas
