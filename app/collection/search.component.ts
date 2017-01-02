import { Component, OnInit } from "@angular/core";
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

const BoardGames = gql`
  query BoardGames($query: String!) {
    boardgames(query: $query) {
      id,
      name
    }
  }
`;

@Component({
  selector: "search",
  template: `
    <ListView [items]="items" class="list-group">
      <template let-item="item">
        <Label [nsRouterLink]="['/item', item.id]" [text]="item.name" class="list-group-item"></Label>
      </template>
    </ListView>
  `
})
export class SearchComponent implements OnInit {
  items: any[];

  constructor(private apollo: Angular2Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: BoardGames,
      variables: {
        query: "7 Wonders"
      }
    }).subscribe(({data}) => {
      this.items = data.boardgames;
    });
  }
}
