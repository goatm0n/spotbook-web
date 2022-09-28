import React, { Component } from "react";
import { Table } from "reactstrap";
import FollowersModal from "./FollowersModal";
import LikesModal from "./LikesModal";

class SpotList extends Component {
    render() {
        const spots = this.props.spots;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Title</th>
                        <th>Spot Type</th>
                        <th>Description</th>
                        <th>Likes</th>
                        <th>Followers</th>
                    </tr>
                </thead>
                <tbody>
                    {!spots || spots.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no spots here yet</b>
                            </td>
                        </tr>
                    ) : (
                        spots.map(spot => (
                            <tr key={spot.id}>
                                <td>{spot.properties.user}</td>
                                <td>{spot.properties.title}</td>
                                <td>{spot.properties.spotType}</td>
                                <td>{spot.properties.description}</td>
                                <td align="center">
                                    <LikesModal 
                                        type="spot"
                                        id={spot.id}
                                        count={spot.properties.likes.length}
                                    />
                                </td>
                                <td align="center">
                                    <FollowersModal 
                                        type="spot"
                                        id={spot.id}
                                        count={spot.properties.followers.length}
                                    />
                                    &nbsp;
                                    &nbsp;
                                </td>
                            </tr>
                        ))
                    )};    
                </tbody>
            </Table>
        );
    }
}

export default SpotList;