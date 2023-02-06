import {effect} from "../reactivity/effect";
import {reactive} from "../reactivity/reactive";

describe('effect', function () {
    it('happy path', function () {
        const user = reactive({age: 10})
        let nextAge;
        effect(() => {
            nextAge = user.age + 1;
        })
        //
        expect(nextAge).toBe(11);

        //update
        user.age++;
        expect(nextAge).toBe(12);
    });
});