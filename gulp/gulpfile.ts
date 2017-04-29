
import { Gulpclass, Task, SequenceTask } from 'gulpclass';
import * as gulp from 'gulp';

@Gulpclass()
export class Gulpfile {

    @Task()
    default(): void {
        console.log('Hello, Gulp!');
    }
}
