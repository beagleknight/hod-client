import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

const BoardGameById = gql`
  query BoardGameById($id: ID!) {
    boardgame(id: $id) {
      id,
      name
    }
  }
`;

@Component({
  selector: "ns-details",
  templateUrl: "item-detail.component.html",
})
export class ItemDetailComponent implements OnInit {
  item: any;

  constructor(private route: ActivatedRoute, private apollo: Angular2Apollo) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];
    this.apollo.watchQuery({
      query: BoardGameById,
      variables: {
        id
      }
    }).subscribe(({ data }) => {
      this.item = data.boardgame;
    });
  }
}
