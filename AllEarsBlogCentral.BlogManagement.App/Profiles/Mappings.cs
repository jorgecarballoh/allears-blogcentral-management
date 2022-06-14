using AllEarsBlogCentral.BlogManagement.App.Services;
using AllEarsBlogCentral.BlogManagement.App.ViewModels;
using AutoMapper;

namespace AllEarsBlogCentral.BlogManagement.App.Profiles
{
    public class Mappings: Profile
    {
        public Mappings()
        { 
            CreateMap<UserListVm, UserViewModel>().ReverseMap(); 
            CreateMap<UserAlbumListVm, UserAlbumViewModel>().ReverseMap();
            CreateMap<UserAlbumWithPhotoListVm, UserAlbumWithPhotoViewModel>().ReverseMap();
            CreateMap<PostListVm, PostViewModel>().ReverseMap();
        }

    }
}
