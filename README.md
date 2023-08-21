# Angular-Signal---Intro

What are signals?
A signal is a wrapper around a value that can notify interested consumers when that value changes. Signals can contain any value, from simple primitives to complex data structures.

A signal's value is always read through a getter function, which allows Angular to track where the signal is used.

Signals may be either writable or read-only.

To change the value of a writable signal, you can either .set() it directly:

content_copy
count.set(3);
or use the .update() operation to compute a new value from the previous one:

content_copy
// Increment the count by 1.
count.update(value => value + 1);

Computed signals
A computed signal derives its value from other signals. Define one using computed and specifying a derivation function:

content_copy
const count: WritableSignal<number> = signal(0);
const doubleCount: Signal<number> = computed(() => count() \* 2);
The doubleCount signal depends on count. Whenever count updates, Angular knows that anything which depends on either count or doubleCount needs to update as well.

Computed signals are readonly.

Effects
Signals are useful because they can notify interested consumers when they change. An effect is an operation that runs whenever one or more signal values change. You can create an effect with the effect function:

content_copy
effect(() => {
console.log(`The current count is: ${count()}`);
});

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/stackblitz-starters-nu7qb7)
