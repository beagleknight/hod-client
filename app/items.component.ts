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
  selector: "ns-items",
  templateUrl: "items.component.html",
})
export class ItemsComponent implements OnInit {
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
