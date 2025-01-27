declare module "@pagefind/default-ui" {
  export class PagefindUI {
    constructor(options: {
      element: HTMLElement | null;
      showImages?: boolean;
      translations?: {
        placeholder?: string;
        clear_search?: string;
        load_more?: string;
        search_label?: string;
        filters_label?: string;
        zero_results?: string;
        many_results?: string;
        one_result?: string;
        searching?: string;
      };
    });
  }
}
