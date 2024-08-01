export type ITask = {
    name: string,
    description: string,
    date: string, // find better units later
    time: string,
    repeat: boolean,
    frequency: string[],
    sound: boolean,
};

