import React, { Component } from "react";
import { Table } from "reactstrap";
import EditProfileModal from "./EditProfileModal";

class ProfileList extends Component {
    render() {
        const profiles = this.props.profiles;
        return (
            <Table dark>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Bio</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {!profiles || profiles.length <= 0 ? (
                        <tr>
                            <td colSpan="6" align="center">
                                <b>Ops, no one here yet</b>
                            </td>
                        </tr>
                    ) : (
                        profiles.map(profile => (
                            <tr key={profile.id}>
                                <td>{profile.username}</td>
                                <td>{profile.email}</td>
                                <td align="center">
                                    <EditProfileModal
                                        profile={profile}
                                    />
                                    &nbsp;&nbsp;
                                </td>
                            </tr>
                        ))
                    )};    
                </tbody>
            </Table>
        );
    }
}

export default ProfileList;