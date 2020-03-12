# Front-End MarTech Candidate Test

:wave: Welcome to The Telegraph front-end candidate test for the Martech Team

- [Task](#wrench-task)
	- [Requirements](#mega-requirements)
	- [What we are looking for](#mag_right-what-we-are-looking-for)
	- [Designs](#art-designs)
- [Set up](#floppy_disk-set-up)
- [Acceptance criteria](#scroll-acceptance-criteria)
- [Submitting your code](#mailbox_with_mail-submitting-your-code)

## :wrench: Task 

We would like you to build a responsive collapsible footer as per the included designs. You should meet the [ACs](#scroll-acceptance-criteria).

Some basic front-end tooling ([gulp](https://gulpjs.com/) for JavaScript compilation, [babel](https://babeljs.io/) for JS transpiling and [SASS](https://sass-lang.com/) as CSS preprocessor) has been provided.

Your code should work in modern browsers such as Chrome, Firefox and Edge. Do not worry about supporting IE11 or below and ES6 is always welcome.

You should spend around 90min on this task. If you do not complete the task in time, please submit with a list of what you would have done with more time. Feel free to be specific and write `// TODO`s throughout your code.

### :mega: Requirements

* Match the [designs](#art-designs) as closely as possible, filling in any gaps as you deem fit
* The footer should be fully responsive
* Pass the [ACs](#scroll-acceptance-criteria)
* Keep your JavaScript vanilla please :icecream:

### :mag_right: What we are looking for

* An understanding of web fundamentals
* A consistent and scalable approach to the test
* An understanding of accessibility
* Ability to translate designs into code

### :art: Designs

* There are images within the `designs` directory which is in the root of the project.

## :floppy_disk: Set up

Firstly install the Gulp:
```sh
npm install gulp-cli -g
npm install gulp -D
```

Then install all of the packages:

```sh
npm install
```

And then run the watcher:

```sh
npm run dev
```

Visit [http://localhost:3000/](http://localhost:3000/) in your web browser and you *should* see a blank webpage with The Telegraph logo and a 'Hello World' message.

The above command will watch and deploy your code. The watchers for CSS and JS files will not take into account changes outside the directories included within the `src` folder.
SVGs and images in general will be available at `http://localhost:3000/images/your-filename.ext` once added to `/src/images/`.
Use whatever font you think it might be a closer match with the ones displayed in the design.

## :scroll: Acceptance criteria

```
Scenario: Show the expanded footer
	Given that I access the page
	Then the page should display a footer
	And the footer should have the arrow facing down
	And the footer should show the main title
	And the footer should show a box with title, a subscribe button and bullet points
```

```
Scenario: Collapse the expanded footer
	Given that I click the arrow at the far right of the footer
	Then the footer should collapse leaving only the main title visible
	And the arrow should now be facing up
```

## :mailbox_with_mail: Submitting your code

:no_entry_sign: Please don't fork this repository as the links will be accessible to other candidates. 

:heavy_check_mark: Please clone it into your own repo and send us a link. 

:heavy_check_mark: We should be able to build and run your application locally.

:heavy_check_mark: Please also feedback on how you found the test - what did you like/not like about it?

:heavy_check_mark: Feel free to send us any other additional notes. E.g. what you would have done with more time.
