import { create } from "zustand";

// import { GroupsService } from "../services/groups";

const initialState = {
  courses: [
    // {
    //   id: 1,
    //   name: "Math",
    //   tasks: 5,
    //   group: 409,
    //   progress: 14,
    // },
    // {
    //   id: 2,
    //   name: "English",
    //   tasks: 5,
    //   group: 409,
    //   progress: 54,
    // },
    // {
    //   id: 3,
    //   name: "Web Design",
    //   tasks: 7,
    //   group: 409,
    //   progress: 18,
    // },
  ],
  fullList: [],
  isOpenCreateCourseModal: false,
};

export const useCourseStore = create((set, get) => ({
  ...initialState,

  getAll: async () => {
    // const { data } = await GroupsService.getAll();
    // const formattedData = data.map((i) => {
    //   return { ...i, key: i.name, membersCount: 0 };
    // });
    // set({ fullList: formattedData, groups: formattedData });
    // return data;
  },

  create: async (values) => {
    const { name, groupId } = values;
    const courses = get().courses;
    courses.push({ id: 4, name: name, group: 409, tasks: 0 });
    set({
      courses: courses,
    });
    // const { data } = await GroupsService.create(values);
    // get().getAll();
  },

  changeCreateCourseModalState: async (isOpen) => {
    set({ isOpenCreateCourseModal: isOpen });
  },

  reset: () => {
    set(initialState);
  },
}));
